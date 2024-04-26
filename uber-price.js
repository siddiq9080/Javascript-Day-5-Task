class uberPrice{
    constructor(basefee,costPerMin,costPerKm)
    {
        this.basefee=basefee;
        this.costPerMin=costPerMin;
        this.costPerKm=costPerKm;
    }

calculatePrice(distanceInKm,timeInMinutes)
{
    const distance=distanceInKm * this.costPerMin;
    const time=timeInMinutes * this.costPerKm;
    const total=distance+time+this.basefee;
    return total;
}
}

const calculate=new uberPrice(100,50,30);
// Base fare: ₹5, Cost per km: ₹2, Cost per minute: ₹1

const distance=10; // In Kilometers
const time=15;

const totalPrice=calculate.calculatePrice(distance,time);

console.log(`The total price for the ride is ₹ ${totalPrice.toFixed(2)}`);

// O/P

// The total price for the ride is ₹ 1050.00