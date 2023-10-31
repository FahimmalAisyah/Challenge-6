import React, {createContext} from 'react'

const UserContext = createContext()

const UserProvider = ({children})=>{
    const user = [
        {   id:1,
            driver: "dengan supir",
            image: "https://www.generatormix.com/images/car-model/land-rover-range-rover.jpg",
            model: "Land Rover Range Rover",
            rentPerDay: "Rp 700.000",
            capacity: 6

        },
        {   id:2,
            driver:"tanpa supir",
            image: "https://www.generatormix.com/images/car-model/fiat-500.jpg",
            model: "Fiat 500",
            rentPerDay: "Rp 250.000",
            capacity: 4
        },
        {   id:3,
            driver:"tanpa supir",
            image: "https://www.generatormix.com/images/car-model/honda-accord.jpg",
            model: "Honda Accord",
            rentPerDay: "Rp 300.000",
            capacity: 4
        },
        {   id:4,
            driver:"dengan supir",
            image: "https://www.generatormix.com/images/car-model/toyota-avensis.jpg",
            model: "Toyota Avensis",
            rentPerDay: "Rp 600.000",
            capacity: 5
        },
        
        {   id:5,
            driver:"tanpa supir",
            image: "https://www.generatormix.com/images/car-model/jeep-renegade.jpg",
            model: "Jeep Renegade",
            rentPerDay: "Rp 700.000",
            capacity: 4
        },
        {   id:6,
            driver:"dengan supir",
            image: "https://www.generatormix.com/images/car-model/mercedes-benz-gla-class.jpg",
            model: "Mercedes-Benz GLA-Class",
            rentPerDay: "Rp 800.000",
            capacity: 5
        },
        {   id:7,
            driver:"dengan supir",
            image: "https://www.generatormix.com/images/car-model/tesla-model-x.jpg",
            model: "Tesla Model X",
            rentPerDay: "Rp 850.000",
            capacity: 4
        },
        {   id:8,
            driver:"tanpa supir",
            image: "https://www.generatormix.com/images/car-model/nissan-gt-r.jpg",
            model: "Nissan GT-R",
            rentPerDay: "Rp 900.000",
            capacity: 4
        },
        {   id:9,
            driver:"tanpa supir",
            image: "https://cdn-0.generatormix.com/images/car-model/kia-stonic.jpg",
            model: "KIA",
            rentPerDay: "Rp 300.000",
            capacity: 4
        },
        {   id:10,
            driver:"tanpa supir",
            image: "https://cdn-0.generatormix.com/images/car-model/ford-fiesta.jpg",
            model: "Ford Fiesta",
            rentPerDay: "Rp 400.000",
            capacity: 4
        },
        {   id:11,
            driver:"dengan supir",
            image: "https://www.generatormix.com/images/car-model/ford-fusion.jpg",
            model: "Ford Fusion",
            rentPerDay: "Rp 500.000",
            capacity: 4
        },
        {   id:12,
            driver:"dengan supir",
            image: "data:image/jpeg;base64,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",
            model: "Hyundai Palisade",
            rentPerDay: "Rp 800.000",
            capacity: 7
        },

    ]

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}