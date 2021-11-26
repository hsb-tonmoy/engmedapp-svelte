<script>
  import "@toast-ui/editor/dist/toastui-editor.css";
  import katex from "katex";
  import "katex/dist/katex.min.css";

  let node;

  export let editor, editor_data;

  export let initialValue,
    initialEditType = "wysiwyg",
    previewStyle = "vertical",
    height = "auto",
    useCommandShortcut = true;

  export let toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr", "quote"],
    ["ul", "ol", "task", "indent", "outdent"],
    ["table", "image", "link"],
    ["code", "codeblock"],
  ];

  const customHTMLRenderer = {
    katex(node) {
      let html;
      try {
        html = katex.renderToString(node.literal, {
          throwOnError: false,
          displayMode: false,
        });
      } catch (e) {
        html = `
        <pre>
        <code>${e}</code>
        </pre>
        `;
      }
      return [
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          classNames: ["math-block"],
        },
        { type: "html", content: html },
        { type: "closeTag", tagName: "div", outerNewLine: true },
      ];
    },
  };

  const editorEvents = ["load", "change", "stateChange", "focus", "blur"];

  let options = {
    el: node,
    initialEditType,
    previewStyle,
    height,
    initialValue,
    customHTMLRenderer,
    useCommandShortcut,
    toolbarItems,
    events: {
      change: () => {
        editor_data = editor.getMarkdown();
      },
    },
  };

  async function initialize(node) {
    const Editor = (await import("@toast-ui/editor")).default;
    options.el = node;
    editor = new Editor(options);

    return {
      destroy() {
        editorEvents.forEach((event) => editor.off(event));
        editor.remove();
      },
    };
  }
</script>

<div bind:this={node} use:initialize={node} />
