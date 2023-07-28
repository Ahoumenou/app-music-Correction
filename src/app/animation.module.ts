import { trigger, transition,animate, style, state, AnimationStateMetadata } from '@angular/animations'

 export const fadeInAnimation = trigger('fadeInAnimation', [
     transition(':enter', [
        style({ opacity: 0}),
        animate('500ms', style({ opacity: 1})),
     ]),
 ])

 export const active : AnimationStateMetadata = state('active', style({
    opacity: 0.8,
    backgroundColor: 'blue'
 }))