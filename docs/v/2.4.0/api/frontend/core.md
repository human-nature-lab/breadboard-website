
<!-- This content was generated from source code. DO NOT EDIT -->
# Client Core
This is the backbone of the breadboard browser client. This API is used to load
all of the client JS and CSS resources and manage the WebSocket connection.

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

Defined in: [core/breadboard.ts:403](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L403)


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

## Properties

### config

• `Private` **config**: ``null`` \| *BreadboardConfig*

Defined in: [core/breadboard.ts:19](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L19)

___

### configMutex

• `Private` **configMutex**: *Mutex*

Defined in: [core/breadboard.ts:21](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L21)

___

### socket

• `Private` **socket**: *Socket*

Defined in: [core/breadboard.ts:18](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L18)

___

### socketMutex

• `Private` **socketMutex**: *Mutex*

Defined in: [core/breadboard.ts:20](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L20)

## Methods

### addScriptFromString

▸ **addScriptFromString**(`contents`: *string*): *Promise*<void\>

Load a script from text

#### Parameters

| Name | Type |
| :------ | :------ |
| `contents` | *string* |

**Returns:** *Promise*<void\>

Defined in: [core/breadboard.ts:199](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L199)

___

### addScriptFromURL

▸ **addScriptFromURL**(`url`: *string*): *Promise*<void\>

Load a script from a URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |

**Returns:** *Promise*<void\>

Defined in: [core/breadboard.ts:182](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L182)

___

### addStyleFromString

▸ **addStyleFromString**(`contents`: *string*): *Promise*<void\>

Inject styles from a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `contents` | *string* |

**Returns:** *Promise*<void\>

Defined in: [core/breadboard.ts:215](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L215)

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

Defined in: [core/breadboard.ts:228](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L228)

___

### attachParser

▸ `Private` **attachParser**(): *void*

Handle parsing breadboard socket events

**Returns:** *void*

Defined in: [core/breadboard.ts:373](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L373)

___

### connect

▸ **connect**(): *Promise*<Socket\>

Returns the connected Socket instance.

**Returns:** *Promise*<Socket\>

Defined in: [core/breadboard.ts:46](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L46)

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

Defined in: [core/breadboard.ts:307](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L307)

___

### disconnect

▸ **disconnect**(): *void*

Disconnect the WebSocket

**Returns:** *void*

Defined in: [core/breadboard.ts:69](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L69)

___

### dispatch

▸ **dispatch**(`eventName`: *string*, ...`args`: *any*[]): *void*

Dispatch an event with eventName using the 'call' method

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | *string* |
| `...args` | *any*[] |

**Returns:** *void*

Inherited from: Emitter.dispatch

Defined in: node_modules/goodish/dist/Emitter.d.ts:30

___

### dispatchApply

▸ **dispatchApply**(`eventName`: *string*, `args?`: *any*[]): *void*

Dispatch an event with eventName using the 'apply' method

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | *string* |
| `args?` | *any*[] |

**Returns:** *void*

Inherited from: Emitter.dispatchApply

Defined in: node_modules/goodish/dist/Emitter.d.ts:36

___

### emit

▸ **emit**(`eventName`: *string*, ...`args`: *any*[]): *void*

Alias for the dispatch method

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | *string* |
| `...args` | *any*[] |

**Returns:** *void*

Inherited from: Emitter.emit

Defined in: node_modules/goodish/dist/Emitter.d.ts:42

___

### getCoreRoot

▸ `Private` **getCoreRoot**(): String

Return the path of the breadboard core script

**Returns:** String

Defined in: [core/breadboard.ts:393](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L393)

___

### getCustomParams

▸ **getCustomParams**(): *object*

**Returns:** *object*

Defined in: [core/breadboard.ts:105](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L105)

___

### getGraph

▸ **getGraph**(): *Promise*<Graph\>

Get an instance of the client graph

**Returns:** *Promise*<Graph\>

Defined in: [core/breadboard.ts:362](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L362)

___

### hasListeners

▸ **hasListeners**(): *boolean*

Getter to check if any listeners are present on this emitter

**Returns:** *boolean*

Inherited from: Emitter.hasListeners

Defined in: node_modules/goodish/dist/Emitter.d.ts:50

___

### loadAngularClient

▸ **loadAngularClient**(): *Promise*<void\>

Loads the legacy, angular.js client code. Replaces the SPA anchor with the old angular ng-app code

**Returns:** *Promise*<void\>

Defined in: [core/breadboard.ts:329](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L329)

___

### loadConfig

▸ **loadConfig**(): *Promise*<BreadboardConfig\>

Load the client config.

**Returns:** *Promise*<BreadboardConfig\>

Defined in: [core/breadboard.ts:27](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L27)

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

Defined in: [core/breadboard.ts:281](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L281)

___

### loadVueDependencies

▸ **loadVueDependencies**(`opts?`: VueLoadOpts): *Promise*<void\>

Load Vue, Vuetify and Breadboard component dependencies

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `opts` | VueLoadOpts | {} |

**Returns:** *Promise*<void\>

Defined in: [core/breadboard.ts:247](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L247)

___

### login

▸ **login**(): *Promise*<void\>

Login method

**Returns:** *Promise*<void\>

Defined in: [core/breadboard.ts:159](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L159)

___

### off

▸ **off**(`eventName`: *string*): *void*

Remove an event callback by reference

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | *string* |

**Returns:** *void*

Inherited from: Emitter.off

Defined in: node_modules/goodish/dist/Emitter.d.ts:22

▸ **off**(`eventName`: *string*, `callback`: Function): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | *string* |
| `callback` | Function |

**Returns:** *void*

Inherited from: Emitter.off

Defined in: node_modules/goodish/dist/Emitter.d.ts:23

▸ **off**(`eventName`: *string*, `callback`: Function, `force`: *boolean*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | *string* |
| `callback` | Function |
| `force` | *boolean* |

**Returns:** *void*

Inherited from: Emitter.off

Defined in: node_modules/goodish/dist/Emitter.d.ts:24

___

### on

▸ **on**(`eventName`: *string*, `callback`: Function, `context?`: *object*): *void*

Add an event callback with optional context

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | *string* |
| `callback` | Function |
| `context?` | *object* |

**Returns:** *void*

Implementation of: BreadboardMessages.on

Inherited from: Emitter.on

Defined in: node_modules/goodish/dist/Emitter.d.ts:15

___

### register

▸ **register**(`eventName`: *string*): *void*

Register an event type by name. This method is called when the 'on' method is called if an event of that type has
not been registered yet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | *string* |

**Returns:** *void*

Inherited from: Emitter.register

Defined in: node_modules/goodish/dist/Emitter.d.ts:8

___

### removeListeners

▸ **removeListeners**(): *void*

Remove all listeners from this instance

**Returns:** *void*

Inherited from: Emitter.removeListeners

Defined in: node_modules/goodish/dist/Emitter.d.ts:46

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

Defined in: [core/breadboard.ts:147](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L147)

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

Defined in: [core/breadboard.ts:93](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L93)

___

### sendCustom

▸ **sendCustom**(`params?`: *SimpleMap*<any\>): *void*

Shortcut for sending a custom event via breadboard.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | *SimpleMap*<any\> |

**Returns:** *void*

Defined in: [core/breadboard.ts:139](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L139)

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

Defined in: [core/breadboard.ts:81](https://github.com/human-nature-lab/breadboard/blob/b1c0a18/frontend/core/breadboard.ts#L81)
