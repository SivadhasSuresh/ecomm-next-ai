import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-integralCF font-bold text-center mb-12">
          SHOP.CO Experience
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Homepage 1 Card */}
          <Link
            href="/homepage1"
            target="_blank"
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 block"
          >
            <div className="h-48 bg-gradient-to-r from-black to-gray-800 flex items-center justify-center">
              <h2 className="text-3xl font-integralCF text-white">
                Normal homepage
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Experience our standard homepage layout with carefully curated
                sections for the best shopping experience.
              </p>
            </div>
          </Link>

          {/* Homepage 2 Card */}
          <Link
            href="/homepage2"
            target="_blank"
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 block"
          >
            <div className="h-48 bg-gradient-to-r from-black via-gray-700 to-gray-900 flex items-center justify-center">
              <h2 className="text-3xl font-integralCF text-white">
                Reordered homepage
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Try our experimental homepage with the same great components but
                in a fresh, randomized arrangement.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
