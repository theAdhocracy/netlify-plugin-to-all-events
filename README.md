# 🔌 Netlify Plugin to All Events 🍱

This is a [Build Plugin](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=repo&utm_medium=all-events-tzm&utm_campaign=devex) that gives you a template to help you plug into the Netlify build events. It also showcases a few handy tools like inputs, constants, and error handling.

### Read the whole post on how this plugin is made [HERE](www.netlify.app/blog/2020/05/20/whats-a-netlify-build-plugin-series-part-2-making-build-plugins/?utm_source=repo&utm_medium=all-events-tzm&utm_campaign=devex) 

## Usage

So you want to use this plugin, 😊 I'm honored. Here are the steps to get it installed and configured.

### 0. Create a project to use this plugin on
If you don't have a project in mind already, there's one [here](https://github.com/tzmanics/demo-netlify-plugin-to-all-things) that you can use. You're welcome 😋.

### 1. Make sure your project has [Build Plugins enabled](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=repo&utm_medium=all-events-tzm&utm_campaign=devex#enable-build-plugins-beta)(<- this link shows you how).

### 2. Add the plugin to your project's [`netlify.toml` configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=repo&utm_medium=all-events-tzm&utm_campaign=devex).

First, you'll signify you're adding a plugin with `[[plugins]]`. Then underneath add a line that tells Netlify where to find the plugin by providing the name to `package`.

```toml
[[plugins]]
package = "netlify-plugin-to-all-events"
```

### 3. Add the plugin inputs to your project's

Underneath where you added this plugin in your `netlify.toml` file you'll add a place to declare `plugins.inputs`. This plugin has two required inputs and one optional:

- `triggerAll`: takes a boolean (default = `true`) !required
- `databaseUrl`: takes a string you like !required
- `keyword`: takes any string but has a default of "toshi" if none is provided 

> [🐙 you can see all the inputs the plugin takes in the `manifest.yml` file](https://github.com/tzmanics/netlify-plugin-to-all-events/blob/master/manifest.yml)

```toml
[[plugins]]
package = "netlify-plugin-to-all-events"
  [plugins.inputs]
  triggerAll = true
  keyword = "toshi"
  databaseUrl = "https://database.com/v1/projects/1234/db/thingy"
```

> [🐙 Here's a link](https://github.com/tzmanics/demo-netlify-plugin-to-all-events/blob/master/netlify.toml) to the complete `netlify.toml` file of the demo project.

### 4. Push those changes and get ready for the ✨magic ✨!

If you already have your project [connected to your Git repo](https://docs.netlify.com/site-deploys/create-deploys/?utm_source=repo&utm_medium=all-events-tzm&utm_campaign=devex#deploy-with-git) when you push this new code it will deploy your project using this plugin. Otherwise, you can deploy your project [any other way you like](https://docs.netlify.com/site-deploys/overview/#deploy-summary?utm_source=repo&utm_medium=all-events-tzm&utm_campaign=devex) and this plugin will search your project and make the changes requested 😘.

> 🧠 For more information on using Netlify Build Plugins you can check out [this blog post](https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins/?utm_source=repo&utm_medium=all-events-tzm&utm_campaign=devex) covering just that.

## Demonstration

[Check out this blog post](www.netlify.app/blog/2020/05/20/whats-a-netlify-build-plugin-series-part-2-making-build-plugins/?utm_source=repo&utm_medium=all-events-tzm&utm_campaign=devex) to learn oh so much about this plugin. It covers how it's made, all the specifics, and shows how to use it locally. This is what the output looks like:

![plugin output](https://cdn.netlify.com/179edad38034a539886133dc29464f6dbe753330/28d04/img/blog/build-logs.jpg)

If you uncomment the error section this is what the error output will output:

![error output](https://cdn.netlify.com/4a7e415c45d02b8d14226359384261c3c1b845f4/557a5/img/blog/cancelbuild.jpg)
  
## Try It With a Demo

You can try out this plugin by deploying [a simple site](https://html-test-project.netlify.app/) which uses it.

Clicking the button below will clone [a test site repo](https://github.com/tzmanics/demo-netlify-plugin-to-all-events), setup a new site [on Netlify](https://netlify.com?utm_source=repo&utm_medium=all-events-tzm&utm_campaign=devex) and deploy the site complete with the plugin configured. You'll still want to [enable Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=repo&utm_medium=all-events-tzm&utm_campaign=devex#enable-build-plugins-beta) for this project.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tzmanics/demo-netlify-plugin-to-all-events)

Happy coding 👩🏻‍💻!

