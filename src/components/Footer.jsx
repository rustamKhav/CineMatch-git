export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-40 h-[45px] px-[14]">
      <div className="container mx-auto px-4 max-w-[1150px] h-full flex items-center justify-between">
        <span className="text-[#7587A4]">Made with ❤️ by kaleidos:code GmbH</span>
        <div className="flex gap-10">
          <span className="text-white font-light">Impressum</span>
          <span className="text-white font-light">Datenschutzerklärung</span>
          <span className="text-white font-light">AGB</span>
        </div>
      </div>
    </footer>
  )
}