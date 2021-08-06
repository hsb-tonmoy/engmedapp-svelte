<script>
  import dateDiffer from "date-differ";
  const result = dateDiffer({
    from: "2021-08-05T17:02:56Z",
    to: Date.now(), // 2020-12-24 in milliseconds since Unix Epoch
  });

  console.log(result);
</script>
