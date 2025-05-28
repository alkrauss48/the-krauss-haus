<script>
  export let title;
  export let description;
  export let imagePath;
  export let bgColors = ['#fecaca', '#fef3c7', '#dbeafe']; // Default pastel colors
</script>

<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="h-64 relative">
    <!-- Pastel diagonal gradient background -->
    <div class="absolute inset-0 opacity-30" style="background: linear-gradient(135deg, {bgColors[0]} 0%, {bgColors[1]} 50%, {bgColors[2]} 100%);"></div>
    <img
      src={imagePath}
      alt={title}
      class="w-full h-full object-contain p-4 relative z-10"
    />
  </div>
  <div class="p-6">
    <h3 class="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p class="text-gray-600">{description}</p>
  </div>
</div> 
