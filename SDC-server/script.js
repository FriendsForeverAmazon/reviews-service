import http from "k6/http";
import { sleep } from "k6";
import { check } from "k6";

// const morgan = require('morgan');

export let options = {
  vus: 100,
  duration: "60s",
  rps: 2000,
  // stages: [
  //   // { duration: "1m", target: 10 },
  //   { duration: "1m", target: 100 },
  //   // { duration: "1m", target: 50 },
  //   // { duration: "1m", target: 70 },
  // ],
  // thresholds: {
  //   "failed requests": ["rate<0.1"],
  // }
};
// 
// create product ids outside of function
const genRandProductID = (begin, end) => {
  return Math.floor(Math.random() * (end - begin) + begin);
}

const bias = () => {
  return Math.random() < 0.7;
}

const product = () => {
  return (bias() ? genRandProductID(49999000, 50000000) : genRandProductID(1, 5000000));
}

export default function() {
  // 80% of traffic should go to 100 top products or something like that
  // console.log(product);
  let res = http.get(`http://localhost:3001/reviews/product/${product()}`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
  // sleep(1);
};