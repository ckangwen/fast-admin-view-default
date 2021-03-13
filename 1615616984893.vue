<template>
  <div class="page-container">
    <crud :column="crudColumn"> </crud>
  </div>
</template>
<script>
import Crud from "@/components/crud";
export default {
  name: "CrudPage",
  components: {
    Crud,
  },
  data() {
    return {
      column: [
        { label: "日期", prop: "date" },
        { label: "姓名", prop: "name" },
        { label: "地址", prop: "address" },
        { label: "年龄", prop: "age" },
      ],
    };
  },
};
</script>
