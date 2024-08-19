"use client";

import { useEffect } from "react";

export default function Contact(){
    useEffect(() => {
		document.querySelectorAll('.tab')[3]?.classList.add('active_tab');
		document.querySelectorAll('.mtab')[3]?.classList.add('active_tab');
	})

    return (
        <section>
            
        </section>
    )
}