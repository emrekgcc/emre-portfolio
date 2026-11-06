// Procedural enamel study. The example patch is defined in tooth-local coordinates.
export function createEnamelView(canvas) {
const gl = canvas.getContext('webgl', { antialias: true, alpha: false });
if (!gl) return null;
const vsrc=`attribute vec3 a,n,l;uniform float yaw,pitch,scale,dx,dy;varying vec3 N,P;void main(){vec3 v=vec3(a.x*cos(yaw)+a.z*sin(yaw),a.y,-a.x*sin(yaw)+a.z*cos(yaw));float depth=9.-v.z;float yy=v.y*cos(pitch)-v.z*sin(pitch);gl_Position=vec4((v.x*scale+dx*depth)*0.5625,yy*scale+dy*depth,-v.z*0.42,depth);N=vec3(n.x*cos(yaw)+n.z*sin(yaw),n.y,-n.x*sin(yaw)+n.z*cos(yaw));P=l;}`;
const fsrc=`precision highp float;varying vec3 N,P;uniform float kind,t,focus;float ease(float a,float b,float x){return smoothstep(a,b,x);}void main(){vec3 nn=normalize(N),lamp=normalize(vec3(-.48,.69,.84)),view=vec3(0.,0.,1.);float light=max(0.,dot(nn,lamp)),front=max(nn.z,0.),rim=pow(1.-max(front,0.),3.);float spec=pow(max(dot(nn,normalize(lamp+view)),0.),48.);float strip=pow(max(dot(nn,normalize(vec3(.54,.28,.92))),0.),95.);
vec3 col;if(kind<.5){float ridges=sin(P.x*14.+P.y*.8)*.011+sin(P.x*31.+P.y*1.3)*.004;ridges+=.009*sin(P.x*34.+1.8*sin(P.y*2.))+.004*sin(P.y*123.+cos(P.x*8.));float edge=1.-smoothstep(-.95,-.42,P.y);vec3 dent=mix(vec3(.92,.873,.79),vec3(.77,.86,.89),edge*.63);dent+=ridges;col=dent*(.39+.52*light+.17*front)+vec3(.14,.155,.17)*spec+vec3(.23,.26,.25)*strip+vec3(.12,.17,.19)*rim;
if(focus>.5 && P.z>.15){vec2 uv=(P.xy-vec2(-.09,.23))/vec2(.145,.082);float theta=atan(uv.y,uv.x);float dist=length(uv)-1.-.12*sin(theta*3.+.7)-.06*cos(theta*5.);float inside=1.-smoothstep(-.15,.13,dist);col=mix(col,vec3(.93,.92,.83),.40*inside);float fill=ease(8.3,10.2,t)*(1.-ease(18.2,20.4,t));float ring=(1.-smoothstep(.012,.105,abs(dist)))*ease(7.,8.5,t)*(1.-ease(18.2,20.4,t));float angle=fract(theta/6.28318+.5);ring*=1.-smoothstep(ease(7.,8.55,t)-.018,ease(7.,8.55,t)+.018,angle);col=mix(col,vec3(.22,.84,.72),.48*inside*fill);col=mix(col,vec3(.03,.46,.38),ring*.98);}
float sweep=mix(-3.4,3.0,ease(4.2,8.7,t));float u=P.x+.19*P.y+.3*P.z-sweep;float shine=exp(-85.*u*u)*ease(4.,4.7,t)*(1.-ease(8.3,9.,t));if(focus>.5)col+=vec3(.025,.12,.10)*shine;
}else{float tex=sin(P.x*84.+P.y*27.)*sin(P.y*97.)*.007;vec3 pink=mix(vec3(.68,.37,.36),vec3(.83,.55,.51),smoothstep(.35,1.9,P.y));col=pink*(.61+.43*light)+tex+vec3(.11,.08,.08)*spec;}
gl_FragColor=vec4(col,1.);}`;
function shader(type,src){let s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s}
let prog=gl.createProgram();gl.attachShader(prog,shader(gl.VERTEX_SHADER,vsrc));gl.attachShader(prog,shader(gl.FRAGMENT_SHADER,fsrc));gl.linkProgram(prog);gl.useProgram(prog);const u=Object.fromEntries(['yaw','pitch','scale','dx','dy','kind','t','focus'].map(k=>[k,gl.getUniformLocation(prog,k)]));const at=['a','n','l'].map(k=>gl.getAttribLocation(prog,k));gl.enable(gl.DEPTH_TEST);
function mesh(fn,nu,nv,kind,focus){let arr=[],ids=[];for(let j=0;j<=nv;j++)for(let i=0;i<=nu;i++){let s=i/nu,t=j/nv,p=fn(s,t),a=fn(s+.0001,t),b=fn(s,t+.0001);let U=a.map((v,k)=>v-p[k]),V=b.map((v,k)=>v-p[k]);let N=[U[1]*V[2]-U[2]*V[1],U[2]*V[0]-U[0]*V[2],U[0]*V[1]-U[1]*V[0]];let len=Math.hypot(...N)||1;arr.push(...p.slice(0,3),...N.map(x=>x/len),...p.slice(3));if(i<nu&&j<nv){let k=j*(nu+1)+i;ids.push(k,k+1,k+nu+1,k+1,k+nu+2,k+nu+1)}}let buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(arr),gl.STATIC_DRAW);let ib=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ib);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(ids),gl.STATIC_DRAW);return{buf,ib,count:ids.length,kind,focus}}
const models=[],pow=(x,p)=>Math.sign(x)*Math.pow(Math.abs(x),p);const teeth=[[-3.54,.62,.83,-.7,-.42],[-2.27,.67,.90,-.36,-.30],[-.83,.77,1.02,-.025,-.11],[.71,.75,1.00,0,.045],[2.10,.62,.87,-.28,.21],[3.32,.60,.94,-.66,.40]];
for(let k=0;k<teeth.length;k++){let [X,w,h,Z,rot]=teeth[k];models.push(mesh((s,v)=>{let phi=(s-.5)*Math.PI*2,lat=(v-.5)*Math.PI*.999;let yy=pow(Math.sin(lat),.66),rr=Math.pow(Math.max(.00001,Math.cos(lat)),.57);let xx=w*rr*(1-.10*yy)*pow(Math.sin(phi),.85),zz=.48*rr*pow(Math.cos(phi),.76);let y=yy*h+.055*xx*xx-.035*Math.sin(xx*8)*Math.pow(Math.max(-yy,0),7);zz+=.026*Math.cos(xx*7.5)*Math.max(0,Math.cos(phi))*(1-yy*yy)-.085*yy*yy;return[X+xx*Math.cos(rot)+zz*Math.sin(rot),y,Z+zz*Math.cos(rot)-xx*Math.sin(rot),xx,y,zz]},76,46,0,k===3?1:0))}
models.push(mesh((s,v)=>{let x=-4.35+s*8.7;let nearest=teeth.reduce((a,b)=>Math.abs(a[0]-x)<Math.abs(b[0]-x)?a:b);let [X,w,h,Z]=nearest,rel=Math.min(1,Math.abs(x-X)/w);let edge=.61+.28*(1-rel*rel)-.22*Math.pow(rel,5);let y=edge+v*(2.10-edge);let z=.29-.045*x*x+.15*Math.sin(v*Math.PI)-.05*v;return[x,y,z,x,y,z]},210,24,1,0));

if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
let phase = 4, frame = 0;
function draw(value) {
  const width = Math.min(1440, Math.max(480, Math.round(canvas.clientWidth * Math.min(devicePixelRatio, 2))));
  const height = Math.round(width * .58);
  if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
  gl.viewport(0, 0, width, height);
  gl.clearColor(.045, .104, .11, 1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  const zoom = Math.max(0, Math.min(1, (value - 4) / 6));
  const view = {yaw: -.14 + .25 * zoom, pitch: .08, scale: 4.65 + 2 * zoom, dx: -.13, dy: -.045, t: value};
  for (const [key, val] of Object.entries(view)) gl.uniform1f(u[key], val);
  for (const model of models) {
    gl.bindBuffer(gl.ARRAY_BUFFER, model.buf);
    at.forEach((id,i) => { gl.enableVertexAttribArray(id); gl.vertexAttribPointer(id, 3, gl.FLOAT, false, 36, i*12); });
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.ib);
    gl.uniform1f(u.kind, model.kind); gl.uniform1f(u.focus, model.focus);
    gl.drawElements(gl.TRIANGLES, model.count, gl.UNSIGNED_SHORT, 0);
  }
}
function show(target) {
  cancelAnimationFrame(frame);
  const from = phase, start = performance.now();
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || Math.abs(from-target) < .01) { phase=target; draw(phase); return; }
  function tick(now) {
    const f = Math.min(1, (now-start)/1250);
    phase = from + (target-from)*f*f*(3-2*f); draw(phase);
    if (f<1) frame=requestAnimationFrame(tick);
  }
  frame=requestAnimationFrame(tick);
}
new ResizeObserver(()=>draw(phase)).observe(canvas);
draw(phase);
return {show};
}
