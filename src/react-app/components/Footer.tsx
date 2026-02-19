export default function Footer() {
  return (
    <footer id="contato" className="bg-accent/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          <div>
            <img 
              src="/LMR-Logo.png" 
              alt="LMR Advogados" 
              className="h-10 mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Orientação jurídica completa e personalizada
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-4">Aviso Legal</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Este site possui conteúdo meramente informativo e não substitui consulta jurídica específica. 
              O contato com este escritório não garante a existência de relação advogado-cliente.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} LMR Advogados Associados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
