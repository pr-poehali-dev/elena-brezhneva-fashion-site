
interface GoogleMapProps {
  address: string;
  embedUrl: string;
}

const GoogleMap = ({ address, embedUrl }: GoogleMapProps) => {
  return (
    <div className="aspect-w-16 aspect-h-9 max-h-[400px]">
      <iframe
        title={`Карта: ${address}`}
        src={embedUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
