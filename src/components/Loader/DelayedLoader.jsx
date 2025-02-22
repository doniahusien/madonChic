"use client";
import { useEffect } from "react";
import Loader from "./Loader";

export default function DelayedLoader({ onDone }) {
    useEffect(() => {
        const timer = setTimeout(() => { onDone() }, 800);
        return () => { clearTimeout(timer); };
    }, [onDone]);
    return <Loader/>
}
