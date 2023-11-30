import type { MetaFunction } from "@remix-run/node";
import { motion as m } from "framer-motion";

export const meta: MetaFunction = () => {
    return [
        { title: "zack" },
        { name: "description", content: "A software developer from Malaysia, with 3 years of experience in Go." },
    ];
};

export default function Index() {
    return (
        <div className="min-h-screen relative bg-slate-900 tiles">
            <div className="z-2 absolute top-0 inset-0 h-80 bg-gradient-to-b from-indigo-900/60 to-transparent">
            </div>
            <div className="relative z-[99] min-h-screen container-3xl mx-auto flex flex-col justify-center items-center">
                <m.h1 
                    className="font-bold text-8xl tracking-tight"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ duration: .80, ease: "easeInOut"}}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b to-indigo-400 from-white/70">
                       Hello. I am
                    </span>
                </m.h1>
                <m.h1 
                    className="font-bold text-8xl tracking-tight"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ delay: .50, duration: .80, ease: "easeInOut"}}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b to-indigo-800 from-indigo-300">
                        Zackry Rosli.
                    </span>
                </m.h1>
                <m.p
                    className="mt-6 text-xl text-indigo-200/80"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ delay: 1, duration: .80, ease: "easeInOut"}}
                >
                    A software developer from Malaysia, with 3 years of experience in Go.
                </m.p>
            </div>
        </div>
    );
}
