<KnowledgeGraph :nodes="nodes"
                :edges="edges"
                height="500px"/>

<script>
export default {
  data () {
    return {
      nodes: [],
      edges: []
    }
  },

  mounted () {
    const baseUrl = '/data/knowledge/front-end'
    Promise.all([
      this.$http.get(this.$withBase(`${baseUrl}/nodes.json`)),
      this.$http.get(this.$withBase(`${baseUrl}/edges.json`))
    ]).then(([nodes, edges]) => {
      this.nodes = nodes
      this.edges = edges
    })
  }
}
</script>
