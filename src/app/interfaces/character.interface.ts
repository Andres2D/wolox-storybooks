export interface Character {
    id:	number;
    name: string;
    status:	"Alive" | "unknown" | "Dead";
    location: OriginLocation;
    image: string;
}

export interface OriginLocation {
    name: string;
    url: string;
}
