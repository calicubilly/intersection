/*
    This solution is to get the similar values of two arrays.
    It's the same concept of intersection in Set Theory. 
    Link: https://en.wikipedia.org/wiki/Intersection_(set_theory)
*/

// sample arrays
const dayOneIps = [1,2,3,4,5];
const dayTwoIps = [1,2,5];

// filter the arrays to unique ips only using Set
const dayOneIpsUnique = Array.from(new Set(dayOneIps));
const dayTwoIpsUnique = Array.from(new Set(dayTwoIps));

// get the similar values using filter function
const intersection = dayOneIpsUnique.filter(ip => dayTwoIpsUnique.includes(ip));

// other solution is to use lodash library using intersection function
// const intersection = _.intersection(dayOneIpsUnique, dayTwoIpsUnique);

console.log(intersection);
