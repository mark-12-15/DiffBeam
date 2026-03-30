import { changelog } from '@/data/changelog'

const tagStyles: Record<string, string> = {
  Launch:      'text-emerald-600 bg-emerald-50 border-emerald-100',
  Improvement: 'text-blue-600 bg-blue-50 border-blue-100',
  Fix:         'text-amber-600 bg-amber-50 border-amber-100',
  Studio:      'text-gray-600 bg-gray-50 border-gray-200',
}

export default function BeamLog() {
  return (
    <section id="changelog" className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Changelog</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            What shipped recently.
          </h2>
        </div>

        <div className="max-w-2xl space-y-0">
          {changelog.map((log, i) => (
            <div key={i} className="flex gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-50 flex-shrink-0" />
                {i < changelog.length - 1 && (
                  <div className="w-px flex-grow bg-gray-200 mt-2 mb-0" style={{ minHeight: '2.5rem' }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-xs text-gray-400">{log.date}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${tagStyles[log.tag]}`}>
                    {log.tag}
                  </span>
                  <span className="text-xs text-gray-400">{log.product}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{log.entry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
