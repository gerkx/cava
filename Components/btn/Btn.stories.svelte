<!-- 
  ==============================
  *    Styles                  *
  ==============================
 -->
<style type="text/scss">
  :root {
    font-size:16px;
    box-sizing: border-box;
    --color-bg: rgb(35,35,35)
  }  

  div {
    background-color: var(--color-bg);
    padding: 5rem;
    height: 150px;
    font-size: 25px;
  }
</style>


<script lang='ts'>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Btn from "./Btn.svelte";
</script>

<Meta
  title="Buttons/Button"
  component={Btn}
  argTypes={{
    color: { control: 'text'}
    // value: { control: "text"},
    // uppercase: { control: "boolean" },
    // block: { control: "boolean" },
  }}
/>

<Template let:args>
  <div>
    <Btn {...args}>
    </Btn>
  </div>
</Template>

<Story
  name="Base Button"
  args={{
    value: 'base'
    // uppercase: false,
    // block: false,
  }}
/>

