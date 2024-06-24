export function getClassName(className, theme, classes) {
    if (!theme) return `${classes[className]} ${classes[className + '__dark']}`
    return classes[className]
}