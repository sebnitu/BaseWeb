## LESS COMMENTS

hese comments wont show up in the compiled CSS and should only be used to describe code that will not be output to CSS e.g. variables and mixins

```
////////////////////////////////////////////////////////////////////////////////
// Title Comment
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////
// Subtitle Comment
////////////////////////////////////////

// Inline comment
```

## CSS Comments

Comments that will be output in non-minified CSS files.

```
/*==============================================================================
  Title Comment
==============================================================================*/

/*======================================
  Subtitle Comment
======================================*/

/**
 * Inline comment
 */
```

## CSS property order

The stack order of CSS properties

```
.selector {
  * position
  * display and box model
  * font, leading, color, text
  * background and border
  * CSS3 properties like border-radius and box-shadow
  * and a handful of other purely visual properties
}
```