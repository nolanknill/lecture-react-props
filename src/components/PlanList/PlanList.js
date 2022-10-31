import Plan from "../Plan/Plan";

function PlanList() {
    const plansData = [
        {
            id: 1,
            name: "Free",
            price: 0,
            features: [
                "10 users included",
                "2 GB of storage",
                "Help center access",
                "Email support"
            ],
            featured: false,
            buttonText: "Sign up for free"
        },
        {
            id: 2,
            name: "Pro",
            price: 15,
            features: [
                "20 users included",
                "10 GB of storage",
                "Help center access",
                "Priority email support"
            ],
            featured: true,
            buttonText: "Get started"
        },
        {
            id: 3,
            name: "Enterprise",
            price: 30,
            features: [
                "50 users included",
                "30 GB of storage",
                "Help center access",
                "Phone & email support"
            ],
            featured: false,
            buttonText: "Contact us"
        }
    ];

    return (
        <>
            {plansData.map((plan) => {
                return (
                    <Plan
                        key={plan.id}
                        name={plan.name}
                        featured={plan.featured}
                        price={plan.price}
                        buttonText={plan.buttonText}
                        features={plan.features}
                    />
                );
            })}

        </>
    )
}

export default PlanList;