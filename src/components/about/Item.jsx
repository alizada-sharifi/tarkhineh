function index({ Icon, title }) {
  return (
    <div className="flex flex-col items-center gap-3 justify-center">
      <Icon className="size-7 fill-neutral-800 md:size-12" />
      <p className="text-xs text-neutral-700 md:text-lg">{title}</p>
    </div>
  );
}

export default index;
