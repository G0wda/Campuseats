const vendorItems = {
  "kitex": {
    title: "Kitchen Express",
    items: [
      {
        id: "kitex1",
        name: "Fried Rice",
        category: "Kitchen Express",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        description: ""
      },
      {
        id: "kitex2",
        name: "Fried Rice",
        category: "Kitchen Express",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        description: ""
      },
      {
        id: "kitex3",
        name: "Fried Rice",
        category: "Kitchen Express",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        description: ""
      },
      {
        id: "kitex4",
        name: "Fried Rice",
        category: "Kitchen Express",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        description: ""
      }
    ]
  },
  "new": {
    title: "New Arrivals",
    items: [
      {
        id: "new1",
        name: "Fried Rice",
        category: "kitex",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      },
      {
        id: "new2",
        name: "Fried Rice",
        category: "kitex",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      },
      {
        id: "new3",
        name: "Fried Rice",
        category: "kitex",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      },
      {
        id: "new4",
        name: "Fried Rice",
        category: "kitex",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      }
    ]
  },
  "rts": {
    title: "Ready to Serve",
    items: [
      {
        id: "rts1",
        name: "Fried Rice",
        category: "",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      },
      {
        id: "rts2",
        name: "Fried Rice",
        category: "",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      },
      {
        id: "rts3",
        name: "Fried Rice",
        category: "",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      },
      {
        id: "rts4",
        name: "Fried Rice",
        category: "",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      }
    ]
  },
  "nmk": {
    title: "Namma Kudla",
    items: [
      {
        id: "nmk1",
        name: "Fried Rice",
        category: "",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      },
      {
        id: "nmk2",
        name: "Fried Rice",
        category: "",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      },
      {
        id: "nmk3",
        name: "Fried Rice",
        category: "",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      },
      {
        id: "nmk4",
        name: "Fried Rice",
        category: "",
        price: 70,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      }
    ]
  }
};
const load = async ({ params }) => {
  const category = params.vendor;
  const categoryData = vendorItems[category];
  return {
    category,
    categoryData
  };
};
export {
  load
};
