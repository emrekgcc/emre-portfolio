const stages = [
  ['Telefon kamerası','İlk iş, net bir kare.','Kullanıcı, ekrandaki yönlendirmeyi izleyerek ağız içi fotoğrafını çeker. Kadrajın ve ışığın tutarlı olması, aynı bölgeye daha sonra tekrar bakabilmek için önemli.','Temsili çekim'],
  ['Görüntü hazırlama','Mineye yakından bak.','OpenCV ile fotoğrafın yerel kontrastını düzenliyorum. Böylece model, mine yüzeyindeki küçük ton farklarını inceleyebiliyor. Işık yansıması da açık görünebildiği için bu fark tek başına bir bulgu sayılmaz.','Temsili 3B yüzey'],
  ['YOLOv8-Nano','İşareti yüzeyde izle.','Yeşil sınırın nasıl çizildiğine bak. Segmentasyon, ilgilenilen bölgenin biçimini piksel düzeyinde tarif ediyor. Bu örnekte maske tek dişin küçük bir bölümünü kaplıyor.','Temsili piksel maskesi'],
  ['Gemini 2.0 Flash','Peki, bu işaret ne demek?','Görüntü ve konum bilgisi birlikte açıklama katmanına girer. Örnekte kişiye gösterilecek ön rapor aşağıdaki gibi okunabilir. Gerekirse sonraki adım diş hekimi değerlendirmesidir.','Örnek ön değerlendirme']
];
const buttons = [...document.querySelectorAll('.steps button')];
const picture = document.querySelector('.picture');
const canvas = picture.querySelector('canvas');
const fallback = picture.querySelector('.still');
const quote = document.querySelector('.annotation blockquote');
let current = 0, renderer;
async function display(index) {
  current = index;
  const [phase,title,text,label] = stages[index];
  picture.dataset.stage = index;
  buttons.forEach((button,i)=>button.setAttribute('aria-pressed', String(i===index)));
  document.querySelector('#phase').textContent = '0'+(index+1)+' / '+phase;
  document.querySelector('#stage-title').textContent = title;
  document.querySelector('#stage-text').textContent = text;
  document.querySelector('.image-label').textContent = label;
  quote.hidden = index !== 3;
  quote.textContent = '“İşaretlenen alan çevresindeki mineye göre daha açık görünüyor. Bunun nedenini yalnızca bu fotoğrafa bakarak söyleyemem.”';
  document.querySelector('#next').firstChild.textContent = index === 3 ? 'Baştan incele ' : 'Sonraki adım ';
  fallback.src = index === 1 ? 'media/surface.webp' : 'media/mask.webp';
  if (index) {
    renderer ??= import('./enamel.js').then(m=>m.createEnamelView(canvas)).catch(()=>null);
    const view = await renderer;
    if (view && index === current) { canvas.hidden=false; view.show(index === 1 ? 4 : 10.6); }
  } else { canvas.hidden = true; if(renderer) (await renderer)?.show(4); }
}
buttons.forEach((button,i)=>button.addEventListener('click',()=>display(i)));
document.querySelector('#next').addEventListener('click',()=>display((current+1)%stages.length));
canvas.addEventListener('webglcontextlost',()=>{canvas.hidden=true;renderer=Promise.resolve(null);});
