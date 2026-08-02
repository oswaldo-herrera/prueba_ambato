export default function SeccionVideoObra() {
  return (
    <section className="relative bg-azul py-10 overflow-hidden -mt-px">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Video YouTube */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-oro/20">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/4QIj9mivv48"
              title="Video Javier Altamirano"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

      </div>

    </section>
  )
}
