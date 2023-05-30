import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar/Sidebar";
import { SIDEBAR_WIDTH } from "@/constants";

export default function Home() {
  return (
    <>
      <div className="flex flex-row relative">
        <Sidebar />
        <div
          style={{
            width: `calc(100vw - ${SIDEBAR_WIDTH}px)`,
            marginLeft: SIDEBAR_WIDTH,
            position: "relative",
          }}
        >
          <Navbar />
          <div className="h-full overflow-y-scroll mt-16">
            {/* {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="h-16 w-full bg-slate-400 mb-1"  >
                {i}
              </div>
            ))} */}

          </div>
        </div>
      </div>
    </>
  );
}
