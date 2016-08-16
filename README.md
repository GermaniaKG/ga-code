#ga-code

**Simple code block formatting**



##LESS and CSS

Include the LESS file in your project main LESS and customize its variables to your needs. After compilation, the ga-code styles are part of your project CSS.

```less
@import "path/to/less/ga-code.less";

@ga-code-border-radius: 4px;
@ga-code-color:         #555;
@ga-code-background:    #eee;
```

Alternatively, you can use the CSS directly:

```html
<link rel="stylesheet" href="path/to/dist/ga-code.min.css">
```


##HTML Usage

Wrap a *pre* element around a *code* element as you would do normally; To define a proper title, add a `data-code` attribute to the *pre*, and optionally a `data-code-title` attribute with a custom description.

```html
<pre data-code="html" data-code-title="HTML example"><code>&lt;h3&gt;Normal Text&lt;/h3&gt;
&lt;p&gt;Subtitle text &ndash; Lorem ipsum dolor sit amet&lt;/p&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consetetur sadipscing elitr&lt;/p&gt;
</code></pre>
```

The result should look like this:

![Screenshot of HTML example above](screenshot.png)

##Develop with Gulp

Use [Git Flow](https://github.com/nvie/gitflow), always work in `develop` branch.

- Install development dependencies: `npm install`
- Run `gulp watch`

Builds are now in `dist/`
