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
    Promise.all([
      this.$http.get(this.$withBase('/data/knowledge/front-end/nodes.json')),
      this.$http.get(this.$withBase('/data/knowledge/front-end/edges.json'))
    ]).then(([nodes, edges]) => {
      this.nodes = nodes
      this.edges = edges
    })
  }
}
</script>
