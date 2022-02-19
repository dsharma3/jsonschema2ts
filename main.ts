import { BsonTypeElement, Welcome, WelcomeField } from './SchemaMapper'
import { Schema } from './schema';
import {plainToClass, plainToInstance} from 'class-transformer'
class JsonSchemaToTsConverter{
    jsonSchema:Welcome;
    json:any;
    schema = new Schema();
    typeCount = 1;

    interfaceTypeMapping = {
                    "String":"string",
                    "Document": "object",
                    "Undefined" : "undefined",
                    "Int32":"number",
                    "ObjectID": "string",
                    "Double":"number",
                    "Date":"Date",
                    "Null":"null",
                    "Array":"Array"
                };
    schemaTypeMapping = {
        "String":"String",
        "Document": "Schema.Types.ObjectId",
        "Undefined" : "undefined",
        "Int32":"Number",
        "ObjectID": "Schema.Types.ObjectId",
        "Double":"Number",
        "Date":"Date",
        "Null":"null",
        "Array":"Array"
    }
    JsonSchemaToTsConverter(){
       
    }

    generateInterface(){
        this.json = this.schema.jsonSchema;
        this.jsonSchema = plainToInstance(Welcome,this.json);

        let interfaceString: string = "import { Schema, Document, model } from 'mongoose';\n\n"
        interfaceString += "interface Type" + this.typeCount++ +  " extends Document{"
        this.jsonSchema.fields.forEach((field:WelcomeField) => {
            //if(field.name.indexOf("_") != 0){
                interfaceString+=this.getFields(field);
            //}
        });
        interfaceString+="}\n\n";
        console.log(interfaceString);
        return interfaceString;
    }
    generateSchema(){
        this.json = this.schema.jsonSchema;
        this.jsonSchema = plainToInstance(Welcome,this.json);
        let schemaString: string = "const type" + this.typeCount++ +  " = new Schema({"
      
        this.jsonSchema.fields.forEach((field:WelcomeField) => {
            //if(field.name.indexOf("_") != 0){
                schemaString+=this.getSchemaFields(field);
            //}
        });
        schemaString+="});\n\n";
        console.log(schemaString);
        return schemaString;

    }
    getSchemaFields(field: WelcomeField):string{
        let types:BsonTypeElement[] = (Array.isArray(field.type)) ? field.type : [field.type];
        let fieldString:string = field.name + " : { type : " + this.getSchemaTypes(types) + "}, \n";
        return fieldString;
    }
    getSchemaTypes(types:BsonTypeElement[]):string{
        let typeString: string = "";
        types.forEach((type) => {
            if(typeString.indexOf(this.schemaTypeMapping[type]) == -1 && type.toLocaleLowerCase() != "undefined")
                
                typeString += this.schemaTypeMapping[type]  + "|";
        });
        return typeString.substring(0, typeString.lastIndexOf("|"));
    }
    getFields(field: WelcomeField):string{
        let types:BsonTypeElement[] = (Array.isArray(field.type)) ? field.type : [field.type];
        let fieldString:string = field.name + " :" + this.getTypes(types) + "; \n";
        return fieldString;
    }

    getTypes(types:BsonTypeElement[]):string{
        let typeString: string = "";
        types.forEach((type) => {
            if(typeString.indexOf(this.interfaceTypeMapping[type]) == -1)
                typeString += this.interfaceTypeMapping[type] + "|";
        });
        //typeString = typeString.replace("undefined|","").replace("|undefined", "").replace("null|","").replace("|null","");
        return typeString.substring(0, typeString.lastIndexOf("|"));
    }
}

let jsonConverter = new JsonSchemaToTsConverter();
jsonConverter.generateInterface();
jsonConverter.generateSchema();