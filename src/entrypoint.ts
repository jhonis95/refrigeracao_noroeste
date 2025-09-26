import type { Alpine } from 'alpinejs'
import anchor from '@alpinejs/anchor'
import collapse from '@alpinejs/collapse'
import { animate } from "motion"

export default (Alpine: Alpine) => {
    (window as any).animate = animate;
    Alpine.store('display',{
		init(this:{setDisplay:Function}) {
			this.setDisplay()
		},
		screen:"desktop",
		setDisplay(this: { screen: string}){
			if(document.documentElement.clientWidth>1280){
            	return this.screen="desktop"
        	}
			if(document.documentElement.clientWidth<1280&&document.documentElement.clientWidth>744){
				return this.screen="tablet"
			}
			if(document.documentElement.clientWidth<744&&document.documentElement.clientWidth>640){
				return this.screen="mobile"
			}
            if(document.documentElement.clientWidth<640){
                return this.screen="phone"
            }
		},
	});
    Alpine.plugin(anchor)
    Alpine.plugin(collapse)
}