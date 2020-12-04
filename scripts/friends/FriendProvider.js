let friends = [
    { name: "Sally", age: 31, taco: "Nashville" },
    { name: "Dominic", age: 39, taco: "Knoxville" },
    { name: "Tamela", age: 29, taco: "Louisville" },
    { name: "Yolanda", age: 42, taco: "Asheville" }
]

export const useFriends = () => {
    return friends.slice().sort((a,b) => a.age - b.age)
}
