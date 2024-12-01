import PageHeaders from "@/components/PageHeaders";

export default function PricingPage() {
  return(
    <div>
      <PageHeaders
        h1Text={"Check out our pricing"}
        h2Text={"Our pricing is very simple"}
      />
      <div className="bg-white text-slate-700 rounded-lg max-w-xs mx-auto text-center p-4">
        <h3 className="font-bold text-3xl">free</h3>
        <h4>free forever</h4>
      </div>
    </div>
  );
}
