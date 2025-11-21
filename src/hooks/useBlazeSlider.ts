import { useEffect, useRef } from "react";

export type BlazeConfig = any;

export function useBlazeSlider(config?: BlazeConfig) {
	const sliderRef = useRef<any>(null);
	const sliderElRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		let isCancelled = false;

		async function init() {
			if (typeof window === "undefined") return;
			if (sliderRef.current || !sliderElRef.current) return;
			try {
				const mod = await import("blaze-slider");
				const BlazeSlider = (mod as any).default || (mod as any);
				if (isCancelled) return;
				sliderRef.current = new BlazeSlider(sliderElRef.current, config);
			} catch (err) {
				// Paket henüz kurulmamış olabilir; sessizce geç
			}
		}

		init();
		return () => {
			isCancelled = true;
			try {
				sliderRef.current?.destroy?.();
			} catch (_) {}
		};
		// config değişirse yeniden kurulmasını istersek dependency'e ekleyebiliriz
		// Tasarım aşamasında yeniden kurulum gereksiz; boş bırakıyoruz
	}, []);

	return { sliderElRef, sliderRef };
}
