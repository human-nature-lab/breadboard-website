
<!-- This content was generated from source code. DO NOT EDIT -->
# Client Core
This is the backbone of the breadboard browser client. This API is used to load
all of the client JS and CSS resources and manage the WebSocket connection.

[[toc]]

## Loading scripts
```javascript
// In client-graph.js
async function init () {
  await Breadboard.addScriptFromURL("url-to-my-script.js")
}

init()
```
<a name="readmemd"></a>

# breadboard

## Classes

- [BreadboardClass](#classesbreadboardclassmd)

## Variables

### Breadboard

• `Const` **Breadboard**: [*BreadboardClass*](#classesbreadboardclassmd)


<a name="classesbreadboardclassmd"></a>

# Class: BreadboardClass

## Hierarchy

- *Emitter*

  ↳ **BreadboardClass**

## Implements

- *BreadboardMessages*

## Constructors

### constructor

\+ **new BreadboardClass**(): [*BreadboardClass*](#classesbreadboardclassmd)

**Returns:** [*BreadboardClass*](#classesbreadboardclassmd)

Inherited from: Emitter.constructor

## Methods

### addScriptFromString

▸ **addScriptFromString**(`contents`: *string*): *Promise*<void\>

Load a script from text

#### Parameters

| Name | Type |
| :------ | :------ |
| `contents` | *string* |

**Returns:** *Promise*<void\>

___

### addScriptFromURL

▸ **addScriptFromURL**(`url`: *string*): *Promise*<void\>

Load a script from a URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |

**Returns:** *Promise*<void\>

___

### addStyleFromString

▸ **addStyleFromString**(`contents`: *string*): *Promise*<void\>

Inject styles from a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `contents` | *string* |

**Returns:** *Promise*<void\>

___

### addStyleFromURL

▸ **addStyleFromURL**(`href`: *string*, `type?`: *string*): *Promise*<void\>

Inject CSS from a url using a "link" node

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `href` | *string* | - |
| `type` | *string* | 'text/css' |

**Returns:** *Promise*<void\>

___

### connect

▸ **connect**(): *Promise*<Socket\>

Returns the connected Socket instance.

**Returns:** *Promise*<Socket\>

___

### createDefaultVue

▸ **createDefaultVue**(`template`: *string*, `mixin?`: *object*): *Promise*<Vue\>

Create default Vue instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | *string* |
| `mixin?` | *object* |

**Returns:** *Promise*<Vue\>

___

### disconnect

▸ **disconnect**(): *void*

Disconnect the WebSocket

**Returns:** *void*

___

### getCustomParams

▸ **getCustomParams**(): *object*

**Returns:** *object*

___

### getGraph

▸ **getGraph**(): *Promise*<Graph\>

Get an instance of the client graph

**Returns:** *Promise*<Graph\>

___

### loadAngularClient

▸ **loadAngularClient**(): *Promise*<void\>

Loads the legacy, angular.js client code. Replaces the SPA anchor with the old angular ng-app code

**Returns:** *Promise*<void\>

___

### loadConfig

▸ **loadConfig**(): *Promise*<BreadboardConfig\>

Load the client config.

**Returns:** *Promise*<BreadboardConfig\>

___

### loadModules

▸ **loadModules**(...`names`: *string*[]): *Promise*<void\>

Load one or more modules using their names

**`memberof`** BreadboardClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `...names` | *string*[] |

**Returns:** *Promise*<void\>

___

### loadVueDependencies

▸ **loadVueDependencies**(`opts?`: VueLoadOpts): *Promise*<void\>

Load Vue, Vuetify and Breadboard component dependencies

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `opts` | VueLoadOpts | {} |

**Returns:** *Promise*<void\>

___

### login

▸ **login**(): *Promise*<void\>

Login method

**Returns:** *Promise*<void\>

___

### send

▸ **send**(`eventName`: *string*, `data?`: *SimpleMap*<any\>): *Promise*<void\>

Send a custom event scoped to the current player. This will also trigger any global custom event handlers.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventName` | *string* | - |
| `data` | *SimpleMap*<any\> | {} |

**Returns:** *Promise*<void\>

___

### sendChoice

▸ **sendChoice**(`uuid`: *string*, `params?`: *SimpleMap*<any\>): *void*

Shortcut for sending a choice via breadboard. Helps keeps params from throwing silent bugs.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uuid` | *string* | - |
| `params` | *SimpleMap*<any\> | {} |

**Returns:** *void*

___

### sendCustom

▸ **sendCustom**(`params?`: *SimpleMap*<any\>): *void*

Shortcut for sending a custom event via breadboard.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | *SimpleMap*<any\> |

**Returns:** *void*

___

### sendType

▸ **sendType**(`action`: *string*, `data?`: *SimpleMap*<any\>): *void*

Send data to breadboard server

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `action` | *string* | - |
| `data` | *SimpleMap*<any\> | {} |

**Returns:** *void*
