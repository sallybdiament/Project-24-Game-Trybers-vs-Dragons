interface Energy extends EnergyType {
  amount: number;  
}

export interface EnergyType {
  type_: 'mana' | 'stamina'
}

export default Energy; 