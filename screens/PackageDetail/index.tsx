import React from 'react';
import { useNavigate } from 'react-router-dom';
import PackageDetail from '../../components/PackageDetail';

const PackageDetailScreen: React.FC = () => {
    const navigate = useNavigate();
    return <PackageDetail onNext={() => navigate('/checkout')} />;
};

export default PackageDetailScreen;
