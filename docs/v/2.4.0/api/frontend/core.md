
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

Defined in: [breadboard.ts:403](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L403)


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

Defined in: [breadboard.ts:199](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L199)

___

### addScriptFromURL

▸ **addScriptFromURL**(`url`: *string*): *Promise*<void\>

Load a script from a URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |

**Returns:** *Promise*<void\>

Defined in: [breadboard.ts:182](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L182)

___

### addStyleFromString

▸ **addStyleFromString**(`contents`: *string*): *Promise*<void\>

Inject styles from a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `contents` | *string* |

**Returns:** *Promise*<void\>

Defined in: [breadboard.ts:215](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L215)

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

Defined in: [breadboard.ts:228](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L228)

___

### connect

▸ **connect**(): *Promise*<Socket\>

Returns the connected Socket instance.

**Returns:** *Promise*<Socket\>

Defined in: [breadboard.ts:46](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L46)

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

Defined in: [breadboard.ts:307](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L307)

___

### disconnect

▸ **disconnect**(): *void*

Disconnect the WebSocket

**Returns:** *void*

Defined in: [breadboard.ts:69](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L69)

___

### getCustomParams

▸ **getCustomParams**(): *object*

**Returns:** *object*

Defined in: [breadboard.ts:105](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L105)

___

### getGraph

▸ **getGraph**(): *Promise*<Graph\>

Get an instance of the client graph

**Returns:** *Promise*<Graph\>

Defined in: [breadboard.ts:362](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L362)

___

### loadAngularClient

▸ **loadAngularClient**(): *Promise*<void\>

Loads the legacy, angular.js client code. Replaces the SPA anchor with the old angular ng-app code

**Returns:** *Promise*<void\>

Defined in: [breadboard.ts:329](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L329)

___

### loadConfig

▸ **loadConfig**(): *Promise*<BreadboardConfig\>

Load the client config.

**Returns:** *Promise*<BreadboardConfig\>

Defined in: [breadboard.ts:27](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L27)

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

Defined in: [breadboard.ts:281](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L281)

___

### loadVueDependencies

▸ **loadVueDependencies**(`opts?`: VueLoadOpts): *Promise*<void\>

Load Vue, Vuetify and Breadboard component dependencies

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `opts` | VueLoadOpts | {} |

**Returns:** *Promise*<void\>

Defined in: [breadboard.ts:247](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L247)

___

### login

▸ **login**(): *Promise*<void\>

Login method

**Returns:** *Promise*<void\>

Defined in: [breadboard.ts:159](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L159)

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

Defined in: [breadboard.ts:147](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L147)

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

Defined in: [breadboard.ts:93](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L93)

___

### sendCustom

▸ **sendCustom**(`params?`: *SimpleMap*<any\>): *void*

Shortcut for sending a custom event via breadboard.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | *SimpleMap*<any\> |

**Returns:** *void*

Defined in: [breadboard.ts:139](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L139)

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

Defined in: [breadboard.ts:81](https://github.com/human-nature-lab/breadboard/blob/40d172e/frontend/core/breadboard.ts#L81)
