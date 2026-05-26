import envato from "../../assets/envato.svg";

export default function PreviewHeader() {
  return (
    <header
      className="
        sticky
        top-0
        left-0
        z-50
        w-full
        bg-[#262626]
        border-b
        border-[#3a3a3a]
        shadow-md
      "
    >

      {/* Main Container */}
      <div
        className="
          h-16
          px-3
          sm:px-5
          lg:px-6
          flex
          items-center
          justify-between
        "
      >

        {/* Envato Logo Section */}
        <div className="flex items-center">

          <a
            href="https://codecanyon.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
            "
          >
            <img
              src={envato}
              alt="Envato Market"
              className="
                h-4
                sm:h-5
                md:h-6
                w-auto
                object-contain
              "
            />
          </a>

        </div>

        {/* Preview Actions */}
        <div className="flex items-center">

          {/* Buy Action */}
          <div>

            <button
              className="
                bg-[#82B440]
                text-white
                text-xs
                sm:text-sm
                font-semibold
                px-3
                sm:px-5
                py-2
                rounded
                hover:bg-[#6f9d35]
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                shadow-sm
              "
            >
              Buy now
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}