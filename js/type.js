class Type{
    static all_types=[];
    constructor(_name,type){

            this.name=_name;
            this.Bug=type['Bug'];
            this.Dark=type['Dark'];
            this.Dragon=type['Dragon'];
            this.Electric=type['Electric'];
            this.Fairy=type['Fairy'];
            this.Fighting=type['Fighting'];
            this.Fire=type['Fire'];
            this.Flying=type['Flying'];
            this.Ghost=type['Ghost'];
            this.Grass=type['Grass'];
            this.Ground=type['Ground'];
            this.Ice=type['Ice'];
            this.Normal=type['Normal'];
            this.Poison=type['Poison'];
            this.Psychic=type['Psychic'];
            this.Rock=type['Rock'];
            this.Steel=type['Steel'];
            this.Water=type['Water'];
        }
    toString(){
        return (
            "Nom : "+
            this.name+"\n"+
            "Efficacités : \n"+
            "Bug : "+this.Bug+"\n"+
            "Dark : "+this.Dark+"\n"+
            "Dragon : "+this.Dragon+"\n"+
            "Electric : "+this.Electric+"\n"+
            "Fairy : "+this.Fairy+"\n"+
            "Fighting : "+this.Fighting+"\n"+
            "Fire : "+this.Fire+"\n"+
            "Flying : "+this.Flying+"\n"+
            "Ghost : "+this.Ghost+"\n"+
            "Grass : "+this.Grass+"\n"+
            "Ground : "+this.Ground+"\n"+
            "Ice : "+this.Ice+"\n"+
            "Normal : "+this.Normal+"\n"+
            "Poison : "+this.Poison+"\n"+
            "Psychic : "+this.Psychic+"\n"+
            "Rock : "+this.Rock+"\n"+
            "Steel : "+this.Steel+"\n"+
            "Water : "+this.Water+"\n");
    }
}