const universe = {
  name: "Cosmic Nexus",
  created: 2000,
  creator: {
    name: "The Architect",
    origin: {
      galaxy: "Andromeda",
      coordinates: {
        x: 345.22,
        y: 998.12,
        z: -77.5,
      },
    },
    powers: ["Creation", "Destruction", "Balance"],
    sayOrigin() {},
  },

  galaxies: [
    {
      id: 1,
      name: "Milky Way",
      planets: [
        {
          id: 101,
          name: "Earth",
          continents: {
            asia: {
              countries: [
                {
                  name: "Bangladesh",
                  cities: [
                    {
                      name: "Dhaka",
                      population: 23000000,
                      landmarks: {
                        river: "Buriganga",
                        monument: "Jatiyo Sriti Shoudho",
                        foods: ["Biriyani", "Fuchka", "Chotpoti", "Kacchi"],
                      },
                      utilities: {
                        weather: {
                          avgTemp: 28,
                          humidity: 82,
                          info() {},
                        },
                        transport: {
                          types: ["Bus", "Rickshaw", "Metro Rail", "CNG"],
                          getFastest() {},
                        },
                      },
                    },
                    {
                      name: "Chattogram",
                      population: 12000000,
                      ports: {
                        sea: true,
                        air: true,
                        details() {},
                      },
                    },
                  ],
                },
                {
                  name: "Japan",
                  cities: [
                    {
                      name: "Tokyo",
                      population: 37000000,
                      districts: [
                        {
                          name: "Shibuya",
                          famousFor: "Crossing & Fashion",
                          localFood: ["Sushi", "Ramen", "Takoyaki"],
                        },
                        {
                          name: "Akihabara",
                          famousFor: "Electronics & Anime",
                          shops: {
                            open: true,
                            total: 5400,
                            info() {},
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            europe: {
              countries: [
                {
                  name: "France",
                  capital: "Paris",
                  arts: {
                    museum: "Louvre",
                    famousArt: [
                      "Mona Lisa",
                      "Venus de Milo",
                      "Liberty Leading the People",
                    ],
                    display() {},
                  },
                },
              ],
            },
          },
          atmosphere: {
            layers: [
              "Troposphere",
              "Stratosphere",
              "Mesosphere",
              "Thermosphere",
            ],
            getLayerCount() {},
          },
          lifeForms: {
            humans: {
              population: 8000000000,
              avgLifespan: 72,
              activities: {
                work: ["Coding", "Designing", "Teaching", "Farming"],
                leisure: ["Gaming", "Movies", "Music", "Sports"],
                describe() {},
              },
            },
            animals: {
              speciesCount: 8700000,
              categories: {
                mammals: ["Cats", "Dogs", "Elephants", "Whales"],
                birds: ["Eagles", "Parrots", "Owls", "Sparrows"],
                fish: ["Tuna", "Shark", "Salmon", "Clownfish"],
              },
            },
          },
        },
        {
          id: 102,
          name: "Mars",
          moons: 2,
          colonies: {
            human: {
              established: 2080,
              population: 3500,
              researchLabs: {
                total: 8,
                projects: [
                  { title: "Water Extraction", success: true },
                  { title: "Atmosphere Simulation", success: false },
                ],
                getActiveCount() {},
              },
            },
          },
        },
      ],
    },
    {
      id: 2,
      name: "Andromeda",
      description: "Home galaxy of The Architect",
      systems: {
        stars: [
          {
            name: "Alpha-9",
            planets: [
              {
                name: "Zephyra",
                conditions: {
                  gravity: 1.8,
                  temp: -10,
                  atmosphere: {
                    oxygen: 12,
                    nitrogen: 60,
                    specialGas: "Xeon-5",
                    details() {},
                  },
                },
                creatures: {
                  dominant: "Zephyrians",
                  population: 120000,
                  communication: {
                    type: "Telepathic",
                    signalRange: "Global",
                    connect() {},
                  },
                },
              },
              {
                name: "Aurion",
                conditions: {
                  gravity: 0.9,
                  temp: 22,
                  atmosphere: {
                    oxygen: 21,
                    nitrogen: 78,
                    specialGas: "Argon-2",
                    details() {},
                  },
                },
                creatures: {
                  dominant: "Aurans",
                  population: 5000000,
                  communication: {
                    type: "Audio-Harmonic",
                    signalRange: "Regional",
                    connect() {},
                  },
                },
              },
            ],
          },
        ],
      },
    },
  ],

  researchCenter: {
    name: "NovaLab",
    scientists: [
      { id: 1, name: "Dr. Ray", field: "Astrophysics" },
      { id: 2, name: "Dr. Nova", field: "Quantum AI" },
      { id: 3, name: "Dr. Sultana", field: "Exobiology" },
    ],
    experiments: {
      quantumCore: {
        energyLevel: 99.9,
        stability: {
          phase: "Semi-Stable",
          temperature: -273,
          test() {},
        },
        calculateEfficiency() {},
      },
      wormholeStudy: {
        portals: 2,
        active: false,
        safetyCheck() {},
      },
      darkMatterProbe: {
        active: true,
        probesDeployed: 12,
        summary: {
          lastPing: "2025-10-28",
          status: "Nominal",
        },
      },
    },
  },

  admin: {
    users: [
      {
        username: "admin001",
        access: {
          level: "super",
          permissions: ["read", "write", "modify", "deploy"],
          hasPermission() {},
        },
      },
      {
        username: "scientist_nova",
        access: {
          level: "high",
          permissions: ["read", "write", "execute"],
          hasPermission() {},
        },
      },
      {
        username: "guest",
        access: {
          level: "limited",
          permissions: ["read"],
          hasPermission() {},
        },
      },
    ],
  },

  functions: {
    greet() {},
    summary() {},
    deepNested: {
      layer1: {
        layer2: {
          layer3: {
            layer4: {
              callMe() {},
            },
          },
        },
      },
    },
  },
};

export { universe };
