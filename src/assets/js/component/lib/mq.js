import MQ from "mq-js";
 
// Define your Site break points here
const bp = {
  small: 320,
  smallX: 385,
  medium: 768,
  large: 1200
}
 
// Creates the media query functions
const mq = new MQ(bp);
 
// Export mq by default
export default mq;
 
// Gives easy access to your site breakpoints
export { mq, bp };