import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './chat.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'chat-message'?: boolean; } &
{ 'chat-message'?: boolean; } &
{ 'chat-message'?: boolean; } &
{ 'user'?: boolean; } &
{ 'scroll-container'?: boolean; } &
{ 'scroll-content'?: boolean; } &
{ 'chat-message'?: boolean; } &
{ 'assistant'?: boolean; } &
{ 'chat-message'?: boolean; } &
{ 'user'?: boolean; } &
{ 'chat-message'?: boolean; } &
{ 'assistant'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'userinput', typeof __VLS_localComponents, "Userinput", "userinput", "userinput"> &
__VLS_WithComponent<'assistant', typeof __VLS_localComponents, "Assistant", "assistant", "assistant">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.Userinput; __VLS_components.userinput;
// @ts-ignore
[userinput,];
__VLS_components.Assistant; __VLS_components.assistant;
// @ts-ignore
[assistant,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("scroll-container"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("scroll-container"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("scroll-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("scroll-content"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ((['chat-message', __VLS_ctx.message.role])), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ((['chat-message', __VLS_ctx.message.role])), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
__VLS_styleScopedClasses = (['chat-message', message.role]);
if (__VLS_ctx.message.role === 'user') {
{
const __VLS_15 = ({} as 'Userinput' extends keyof typeof __VLS_ctx ? { 'userinput': typeof __VLS_ctx.Userinput; } : 'userinput' extends keyof typeof __VLS_ctx ? { 'userinput': typeof __VLS_ctx.userinput; } : typeof __VLS_resolvedLocalAndGlobalComponents).userinput;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, content: ((__VLS_ctx.message.content)), }));
({} as { userinput: typeof __VLS_15; }).userinput;
const __VLS_17 = __VLS_16({ ...{}, content: ((__VLS_ctx.message.content)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, content: ((__VLS_ctx.message.content)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
// @ts-ignore
[message, message, message, message, message, message,];
}
else {
{
const __VLS_20 = ({} as 'Assistant' extends keyof typeof __VLS_ctx ? { 'assistant': typeof __VLS_ctx.Assistant; } : 'assistant' extends keyof typeof __VLS_ctx ? { 'assistant': typeof __VLS_ctx.assistant; } : typeof __VLS_resolvedLocalAndGlobalComponents).assistant;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, content: ((__VLS_ctx.message.content)), }));
({} as { assistant: typeof __VLS_20; }).assistant;
const __VLS_22 = __VLS_21({ ...{}, content: ((__VLS_ctx.message.content)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, content: ((__VLS_ctx.message.content)), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
// @ts-ignore
[message, message, message,];
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["scroll-container"];
__VLS_styleScopedClasses["scroll-content"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
