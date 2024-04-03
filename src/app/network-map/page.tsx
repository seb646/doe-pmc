'use client'

import Image from "next/image";
import Link from 'next/link';

import "@react-sigma/core/lib/react-sigma.min.css";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer } from "@react-sigma/core";

const NetworkMap = () => {
  const graph = new MultiDirectedGraph();

  var colors = {
    doe: '#ffbd70',
    pmc: '#d6706f',
    dept: '#8aa1bf'
  }
  var sizes = {
    lg: 30,
    md: 20,
    sm: 10
  }
  graph.addNode("DOE", { x: 0, y: 0, size: sizes.lg, color: colors.doe,
    label: "Department of Energy"});

  // First circle
  graph.addNode("SOC", { x: 0, y: 1, size: sizes.md, color: colors.pmc,
    label: "SOC LLC" }
  );
  graph.addEdgeWithKey("DOE_SOC", "DOE", "SOC", { label: "DOE_SOC" });

  graph.addNode("CASS", { x: 1, y: 0.5, size: sizes.md, color: colors.pmc,
    label: "Culpepper & Associates Security Services" }
  );
  graph.addEdgeWithKey("DOE_CASS", "DOE", "CASS", { label: "DOE_CASS" });

  graph.addNode("ACAD", { x: -1, y: 0.5, size: sizes.md, color: colors.pmc,
    label: "Acadia Protective Services, LLC" }
  );
  graph.addEdgeWithKey("DOE_ACAD", "DOE", "ACAD", { label: "DOE_ACAD" });

  graph.addNode("KER", { x: -1.5, y: 1.75, size: sizes.md, color: colors.pmc,
    label: "Kerberos International" }
  );
  graph.addEdgeWithKey("KER_ACAD", "KER", "ACAD", { label: "KER_ACAD" });

  graph.addNode("WHITE", { x: 0.75, y: -0.75, size: sizes.md, color: colors.pmc,
    label: "Whitestone Group, INC" }
  );
  graph.addEdgeWithKey("DOE_WHITE", "DOE", "WHITE", { label: "DOE_WHITE" });

  graph.addNode("GLD", { x: -0.75, y: -0.75, size: sizes.md, color: colors.pmc,
    label: "Golden SVCS, LLC" }
  );
  graph.addEdgeWithKey("DOE_GLD", "DOE", "GLD", { label: "DOE_GLD" });

  // Second Circle
  graph.addNode("DOD", { x: 0, y: 2, size: sizes.md, color: colors.dept,
    label: "Department of Defense" }
  );
  graph.addEdgeWithKey("SOC_DOD", "SOC", "DOD", { label: "SOC_DOD" });
  graph.addEdgeWithKey("DOD_KER", "DOD", "KER", { label: "SOC_DOD" });

  graph.addNode("DHS", { x: 0, y: -2, size: sizes.md, color: colors.dept,
    label: "Department of Homeland Security" }
  );

  graph.addNode("DOJ", { x: 1.5, y: -0.1, size: sizes.md, color: colors.dept,
    label: "Department of Justice" }
  );
  graph.addEdgeWithKey("DOJ_CASS", "DOJ", "CASS", { label: "DOJ_CASS" });

  graph.addNode("FBI", { x: 1.2, y: -0.45, size: sizes.sm, color: colors.dept,
    label: "Federal Bureau of Investigation" }
  );
  graph.addEdgeWithKey("DOJ_FBI", "DOJ", "FBI", { label: "DOJ_FBI" });
  graph.addEdgeWithKey("FBI_WHITE", "FBI", "WHITE", { label: "FBI_WHITE" });
  
  // Third Layer
  graph.addNode("SOCOM", { x: 0.75, y: 1.4, size: sizes.sm, color: colors.dept,
    label: "U.S. Special Operations Command" }
  );
  graph.addEdgeWithKey("DOD_SOCOM", "DOD", "SOCOM", { label: "DOD_SOCOM" });
  graph.addEdgeWithKey("CASS_SOCOM", "CASS", "SOCOM", { label: "CASS_SOCOM" });

  graph.addNode("NASA", { x: -1.25, y: -0.3, size: sizes.sm, color: colors.dept,
    label: "NASA" }
  );
  graph.addEdgeWithKey("GLD_NASA", "GLD", "NASA", { label: "GLD_NASA" });

  graph.addNode("FPS", { x: -0.5, y: -1.5, size: sizes.sm, color: colors.dept,
    label: "Federal Protective Service" }
  );
  graph.addEdgeWithKey("DHS_FPS", "DHS", "FPS", { label: "DHS_FPS" });
  graph.addEdgeWithKey("GLD_FPS", "GLD", "FPS", { label: "GLD_FPS" });

  graph.addNode("ICE", { x: 0.5, y: -1.5, size: sizes.sm, color: colors.dept,
    label: "Immigration & Customs Enforcement" }
  );
  graph.addEdgeWithKey("DHS_ICE", "DHS", "ICE", { label: "DHS_ICE" });
  graph.addEdgeWithKey("WHITE_ICE", "WHITE", "ICE", { label: "WHITE_ICE" });

  graph.addNode("STATE", { x: -0.75, y: 1.4, size: sizes.sm, color: colors.dept,
    label: "Department of State" }
  );
  graph.addEdgeWithKey("STATE_SOC", "STATE", "SOC", { label: "STATE_SOC" });

  return (
    <>
        <main>
            <header>
                <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-14 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="flex mb-4 text-4xl text-white font-bold">PMC Network Map</h1>
                        <div className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor augue. Mauris nulla ex, commodo nec varius a, molestie non leo. Duis nec urna tortor. Phasellus id neque sed sem pharetra bibendum. Proin vitae ante eget leo tristique efficitur. Aenean varius magna nunc, quis viverra ante fermentum ac. Nunc aliquam tortor mauris. Nunc dapibus, mi in commodo accumsan, diam diam tempor sem, vitae fringilla orci sapien eget nulla. Quisque nec ligula eros.</div>

                        <div className="mt-4 text-gray-400">Fusce nibh odio, suscipit finibus fringilla id, cursus non nibh. Cras id sem erat. Etiam in tincidunt dui. Suspendisse interdum velit eu orci sollicitudin, eu molestie arcu dapibus. Cras rhoncus gravida nisi vel elementum.</div>
                    </div>
                </div>
            </header>

            <div className="border-t border-white/10">
              <SigmaContainer className="bg-black" style={{ height: "605px" }} graph={graph}></SigmaContainer>
            </div>
    </main>
    </>
  );
}

export default NetworkMap;