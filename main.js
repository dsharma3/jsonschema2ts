"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = require("./schema");
var JsonSchemaToTsConverter = /** @class */ (function () {
    function JsonSchemaToTsConverter() {
    }
    JsonSchemaToTsConverter.prototype.JsonSchemaToTsConverter = function () {
        this.generateSchema();
    };
    JsonSchemaToTsConverter.prototype.generateSchema = function () {
        var _this = this;
        var schema = new schema_1.Schema();
        var ignoreFieldsPrefix = ['_'];
        var jsonSchema = JSON.parse(schema.jsonSchema);
        var interfaceString = "interface Type extends Document{";
        jsonSchema.fields.forEach(function (field) {
            if (field.name.indexOf("_") != 0) {
                _this.getFields(field);
            }
        });
        interfaceString += "}";
        console.log(interfaceString);
    };
    JsonSchemaToTsConverter.prototype.getFields = function (field) {
        var types = (Array.isArray(field.type)) ? field.type : [field.type];
        var fieldString = field.name + " :" + this.getTypes(types);
        return fieldString;
    };
    JsonSchemaToTsConverter.prototype.getTypes = function (types) {
        var typeString = "";
        types.forEach(function (type) {
            typeString += " | ";
        });
        return typeString.substring(0, typeString.lastIndexOf("|"));
    };
    return JsonSchemaToTsConverter;
}());
var jsonConverter = new JsonSchemaToTsConverter();

//# sourceMappingURL=main.js.map