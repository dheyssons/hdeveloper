"use client";
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
		document.querySelectorAll('.tab')[2]?.classList.add('active_tab');
		document.querySelectorAll('.mtab')[2]?.classList.add('active_tab');
	})

    return (
        <section>
            
        </section>
    )
}