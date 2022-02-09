
export class Welcome {
    fields: WelcomeField[];
    count:  number;
}

export class WelcomeField {
    name:           string;
    path:           string;
    count:          number;
    types:          PurpleType[];
    total_count:    number;
    type:           BsonTypeElement[] | BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export enum BsonTypeElement {
    Array = "Array",
    Boolean = "Boolean",
    Date = "Date",
    Document = "Document",
    Double = "Double",
    Int32 = "Int32",
    Null = "Null",
    ObjectID = "ObjectID",
    String = "String",
    Undefined = "Undefined",
}

export class PurpleType {
    name:            BsonTypeElement;
    bsonType?:       BsonTypeElement;
    path:            string;
    count:           number;
    values?:         Array<number | string>;
    total_count:     number;
    probability:     number;
    unique?:         number;
    has_duplicates?: boolean;
    type?:           BsonTypeElement;
    types?:          TentacledType[];
    lengths?:        number[];
    average_length?: number;
    fields?:         PurpleField[];
}

export class PurpleField {
    name:           string;
    path:           string;
    count:          number;
    types:          FluffyType[];
    total_count:    number;
    type:           BsonTypeElement[] | BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export class FluffyType {
    name:            BsonTypeElement;
    bsonType?:       BsonTypeElement;
    path:            string;
    count:           number;
    values?:         Array<boolean | number | string>;
    total_count:     number;
    probability:     number;
    unique?:         number;
    has_duplicates?: boolean;
    types?:          StickyType[];
    lengths?:        number[];
    average_length?: number;
    type?:           BsonTypeElement;
    fields?:         FluffyField[];
}

export class FluffyField {
    name:           string;
    path:           string;
    count:          number;
    types:          TentacledType[];
    total_count:    number;
    type:           BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export class TentacledType {
    name:           BsonTypeElement;
    bsonType:       BsonTypeElement;
    path:           string;
    count:          number;
    values:         string[];
    total_count:    number;
    probability:    number;
    unique:         number;
    has_duplicates: boolean;
}

export class StickyType {
    name:        BsonTypeElement;
    bsonType:    BsonTypeElement;
    path:        string;
    count:       number;
    fields:      TentacledField[];
    total_count: number;
    probability: number;
}

export class TentacledField {
    name:           string;
    path:           string;
    count:          number;
    types:          IndigoType[];
    total_count:    number;
    type:           BsonTypeElement[] | BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export class IndigoType {
    name:            BsonTypeElement;
    bsonType?:       BsonTypeElement;
    path:            string;
    count:           number;
    values?:         Array<boolean | number | string>;
    total_count:     number;
    probability:     number;
    unique?:         number;
    has_duplicates?: boolean;
    type?:           BsonTypeElement;
    fields?:         StickyField[];
    types?:          MischievousType[];
    lengths?:        number[];
    average_length?: number;
}

export class StickyField {
    name:           string;
    path:           string;
    count:          number;
    types:          IndecentType[];
    total_count:    number;
    type:           BsonTypeElement[] | BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export class IndecentType {
    name:            BsonTypeElement;
    bsonType?:       BsonTypeElement;
    path:            string;
    count:           number;
    values?:         Array<boolean | number | string>;
    total_count:     number;
    probability:     number;
    unique?:         number;
    has_duplicates?: boolean;
    type?:           BsonTypeElement;
    fields?:         IndigoField[];
    types?:          CunningType[];
    lengths?:        number[];
    average_length?: number;
}

export class IndigoField {
    name:           string;
    path:           string;
    count:          number;
    types:          HilariousType[];
    total_count:    number;
    type:           BsonTypeElement[] | BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export class HilariousType {
    name:            BsonTypeElement;
    bsonType?:       BsonTypeElement;
    path:            string;
    count:           number;
    values?:         Array<boolean | number | string>;
    total_count:     number;
    probability:     number;
    unique?:         number;
    has_duplicates?: boolean;
    types?:          CunningType[];
    lengths?:        number[];
    average_length?: number;
    fields?:         IndecentField[];
    type?:           BsonTypeElement;
}

export class IndecentField {
    name:           string;
    path:           string;
    count:          number;
    types:          AmbitiousType[];
    total_count:    number;
    type:           BsonTypeElement[] | BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export class AmbitiousType {
    name:           BsonTypeElement;
    bsonType?:      BsonTypeElement;
    path:           string;
    count:          number;
    values?:        Array<boolean | number>;
    total_count:    number;
    probability:    number;
    unique:         number;
    has_duplicates: boolean;
    type?:          BsonTypeElement;
}

export class CunningType {
    name:        BsonTypeElement;
    bsonType:    BsonTypeElement;
    path:        string;
    count:       number;
    fields:      HilariousField[];
    total_count: number;
    probability: number;
}

export class HilariousField {
    name:           string;
    path:           string;
    count:          number;
    types:          MagentaType[];
    total_count:    number;
    type:           BsonTypeElement[] | BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export class MagentaType {
    name:            BsonTypeElement;
    type?:           BsonTypeElement;
    path:            string;
    count:           number;
    total_count:     number;
    probability:     number;
    unique?:         number;
    has_duplicates?: boolean;
    bsonType?:       BsonTypeElement;
    values?:         Array<boolean | number | string>;
    fields?:         AmbitiousField[];
}

export class AmbitiousField {
    name:           string;
    path:           string;
    count:          number;
    types:          FriskyType[];
    total_count:    number;
    type:           BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export class FriskyType {
    name:           BsonTypeElement;
    bsonType:       BsonTypeElement;
    path:           string;
    count:          number;
    values:         boolean[];
    total_count:    number;
    probability:    number;
    unique:         number;
    has_duplicates: boolean;
}

export class MischievousType {
    name:        BsonTypeElement;
    bsonType:    BsonTypeElement;
    path:        string;
    count:       number;
    fields:      CunningField[];
    total_count: number;
    probability: number;
}

export class CunningField {
    name:           string;
    path:           string;
    count:          number;
    types:          BraggadociousType[];
    total_count:    number;
    type:           BsonTypeElement[] | BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export class BraggadociousType {
    name:            BsonTypeElement;
    bsonType?:       BsonTypeElement;
    path:            string;
    count:           number;
    values?:         Array<number | string>;
    total_count:     number;
    probability:     number;
    unique?:         number;
    has_duplicates?: boolean;
    type?:           BsonTypeElement;
    fields?:         MagentaField[];
}

export class MagentaField {
    name:           string;
    path:           string;
    count:          number;
    types:          Type1[];
    total_count:    number;
    type:           BsonTypeElement;
    has_duplicates: boolean;
    probability:    number;
}

export class Type1 {
    name:           BsonTypeElement;
    bsonType:       BsonTypeElement;
    path:           string;
    count:          number;
    values:         number[];
    total_count:    number;
    probability:    number;
    unique:         number;
    has_duplicates: boolean;
}

