const stavka = [
    {
        diapozon: {
            min: 0,
            max: 2_400_000
        },
        procent: 13
    },
    {
        diapozon: {
            min: 2_400_000,
            max: 5_000_000
        },
        procent: 15
    },
    {
        diapozon: {
            min: 5_000_000,
            max: 20_000_000
        },
        procent: 18
    },
    {
        diapozon: {
            min: 20_000_000,
            max: 50_000_000
        },
        procent: 20
    },
    {
        diapozon: {
            min: 50_000_000,
            max: NaN
        },
        procent: 15
    }
]

function ndfl(income) {
    let nalog = 0;
    
    for (let i of stavka) {
        if (income < i.diapozon.min) return nalog;
        let 
    }
    if (income == Number) {

    }
    
}

console.log(ndfl(3_000_000)); // 13.4