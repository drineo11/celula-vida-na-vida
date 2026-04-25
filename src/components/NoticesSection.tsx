import { Pin, Calendar, MapPin } from "lucide-react";
import { Notice } from "@/lib/mockData";
import { parseDateSafe } from "@/lib/utils";

interface NoticesSectionProps {
  notices: Notice[];
}

export function NoticesSection({ notices }: NoticesSectionProps) {
  if (notices.length === 0) {
    return null;
  }

  // Sort: pinned first, then by date
  const sortedNotices = [...notices].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    if (a.date && b.date) {
      return parseDateSafe(a.date).getTime() - parseDateSafe(b.date).getTime();
    }
    return 0;
  });

  return (
    <section className="wine-card animate-fade-in">
      <h2 className="font-display font-bold text-xl sm:text-2xl text-primary mb-5">
        Recados & Programação
      </h2>

    {/*   <div className="space-y-3">
        {sortedNotices.map((notice) => (
          <article 
            key={notice.id}
            className={`p-4 rounded-lg border transition-all ${
              notice.pinned 
                ? "bg-primary/5 border-primary/20" 
                : "bg-muted/50 border-transparent hover:border-border"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {notice.pinned && (
                    <Pin size={14} className="text-primary flex-shrink-0" />
                  )}
                  <h3 className="font-semibold text-foreground truncate">
                    {notice.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {notice.description}
                </p>
                {notice.location && (
                  <div className="mt-2 text-sm text-muted-foreground flex items-start gap-1.5">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span>
                      <span className="font-medium">Local:</span> {notice.location}
                      {notice.mapsLink && (
                        <>
                          .{" "}
                          <a 
                            href={notice.mapsLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium inline-block"
                          >
                            Google Maps (CLIQUE AQUI)
                          </a>
                        </>
                      )}
                    </span>
                  </div>
                )}
              </div>
              
              {notice.date && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                  <Calendar size={12} />
                  <span>
                    {parseDateSafe(notice.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                    })}
                  </span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div> */}
    </section>
  );
}
